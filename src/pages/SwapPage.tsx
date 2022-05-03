import React, { useEffect } from 'react';
import SwapCard from '~components/swap/SwapCard';
import Loading from '~components/layout/Loading';
import { useWhitelistTokens } from '../state/token';
import getConfig from '~services/config';
function SwapPage() {
	
	const allTokens = useWhitelistTokens();

    useEffect(()=>{
        const config = getConfig();
	    console.log('Config: ',config);
    },[]);

	if (!allTokens) return <Loading />;

	return (
		<div className="swap">
			<section className="xl:w-1/3 2xl:w-1/3 3xl:w-1/4 lg:w-1/2 md:w-5/6 xs:w-full xs:p-2 m-auto">
				<div
					style={{
						width: "100%",
                        height:"300px",
						backgroundColor: `#f9f8f1`,
						borderRadius: `10px`,
						padding: `15px`,
						display: `flex`,
						justifyContent: `center`,
						alignItems: `center`,
						flexWrap: `wrap`,
						flexDirection: `row`,
						overflow: `auto`,
						overflowWrap: `anywhere`
					}}
				>
					<h1 style={{ width: "100%", marginTop: `25px` }}>All tokens</h1>
					<div data-refname="allTokensListArea" style={{ width: "100%", marginTop: `25px` }}>
						{allTokens.map((token, index) => {
							return (
								<div key={`${token.id}-${index}`}>
									<div>
                                        <h4>{`#${(index + 1)}`}</h4>
										<p>id: {token.id} </p>
                                        <hr/>
										<p>name: {token.name} </p>
                                        <hr/>
										<p>symbol: {token.symbol} </p>
                                        <hr/>
										<p>decimals: {token.decimals} </p>
                                        <hr/>
										<p>amountLabel: {token.amountLabel} </p>
                                        <hr/>
										<p>amount: {token.amount} </p>
                                        <hr/>
										<p>near: {token.near} </p>
                                        <hr/>
										<p>ref: {token.ref} </p>
                                        <hr/>
										<p>total: {token.total} </p>
									</div>
                                    <br />
									<hr />
                                    <br />
								</div>
							);
						})}
					</div>
				</div>
				<SwapCard allTokens={allTokens} />
			</section>
		</div>
	);
}

export default SwapPage;
